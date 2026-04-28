// utils/pdfGenerator.js
import jsPDF from 'jspdf';

export const generateQuotePDF = (formData, selectedProducts, quantities, productCategories) => {
    try {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;

        const primaryColor = [57, 181, 75];
        const darkGray = [64, 64, 64];
        const lightGray = [128, 128, 128];

        const addHeader = () => {
            doc.setFillColor(...primaryColor);
            doc.rect(0, 0, pageWidth, 25, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.text('CLOVESON.', 20, 17);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.text('Advanced Manufacturing Technology | Eco-Friendly Materials', 20, 22);
            const logoBase64 = '/icon.png';
            doc.addImage(logoBase64, 'PNG', pageWidth - 25, 2.5, 20, 20);
        };

        const addFooter = (pageNumber, totalPages) => {
            doc.setTextColor(...lightGray);
            doc.setFontSize(8);
            doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - 30, pageHeight - 10);
            doc.text('Generated on: ' + new Date().toLocaleDateString(), 20, pageHeight - 10);
            doc.text('Cloves Inc. | Email: harsha.soundararajan@hotmail.com | WWW.clovesinc.org', 20, pageHeight - 5);
        };

        addHeader();

        let y = 35;
        doc.setTextColor(...darkGray);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('QUOTE REQUEST', 20, y);

        y += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Quote ID: QR-${Date.now()}`, 20, y);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 120, y);
        y += 6;
        doc.text(`Valid Until: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}`, 20, y);

        y += 10;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('CUSTOMER INFORMATION', 20, y);

        y += 10;
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...darkGray);

        const info = [
            ['Name:', formData.name || 'N/A'],
            ['Company:', formData.company || 'N/A'],
            ['Email:', formData.email || 'N/A'],
            ['Phone:', formData.phone || 'N/A'],
            ['Industry:', formData.industry || 'N/A'],
            ['Region:', formData.region || 'N/A'],
            ['Delivery Timeline:', formData.deliveryTimeline || 'N/A'],
        ];

        if (formData.hospitalName) info.push(['Hospital/Facility:', formData.hospitalName]);
        if (formData.facilityType) info.push(['Facility Type:', formData.facilityType]);
        if (formData.customDate) info.push(['Custom Delivery Date:', formData.customDate]);

        info.forEach(([label, value]) => {
            doc.setFont('helvetica', 'bold');
            doc.text(label, 20, y);
            doc.setFont('helvetica', 'normal');
            doc.text(value, 60, y);
            y += 6;
        });

        if (formData.sustainability) {
            y += 1;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...primaryColor);
            doc.text('ECO-FRIENDLY MATERIALS PREFERRED', 20, y);
            y += 10;
        } else {
            y += 10;
        }

        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('REQUESTED PRODUCTS', 20, y);
        y += 10;

        doc.setFontSize(10);
        doc.setTextColor(...darkGray);

        const selectedItems = Object.keys(selectedProducts).filter(id => selectedProducts[id]);
        let totalEstimate = 0;

        selectedItems.forEach((productId, index) => {
            const product = Object.values(productCategories).flat().find(p => p.id === productId);
            const quantity = parseInt(quantities[productId]) || 1;
            const price = parseFloat(product.price.replace('$', ''));
            const lineTotal = price * quantity;
            totalEstimate += lineTotal;
            const category = Object.keys(productCategories).find(cat =>
                productCategories[cat].some(p => p.id === productId)
            );

            doc.text(`${index + 1}. ${product.name} | Category: ${category} | Qty: ${quantity} | Unit: ${product.price} | Total: $${lineTotal.toFixed(2)}`, 20, y);
            y += 6;
        });

        y += 5;
        doc.setDrawColor(...lightGray);
        doc.setLineWidth(0.5);
        doc.rect(120, y, 70, 30);
        doc.setFontSize(12);
        doc.setTextColor(...darkGray);
        doc.setFont('helvetica', 'bold');
        doc.text('QUOTE SUMMARY', 125, y + 8);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Total Items: ${selectedItems.length}`, 125, y + 16);
        doc.text(`Estimated Total: $${totalEstimate.toFixed(2)}`, 125, y + 22);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('*Final pricing upon review', 125, y + 28);


        y += 20;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('NEXT STEPS', 20, y);
        y += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...darkGray);

        const nextSteps = [
            '1. Review this quote and confirm your requirements',
            '2. Reply to our email with any questions or modifications',
            '3. Our team will provide final pricing and delivery timeline',
            '4. Upon approval, we\'ll process your order and provide tracking information'
        ];

        nextSteps.forEach(step => {
            doc.text(step, 20, y);
            y += 6;
        });


        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            addFooter(i, totalPages);
        }

        const fileName = `Cloves_Quote_${formData.company?.replace(/[^a-zA-Z0-9]/g, '_') || 'Customer'}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);

        return {
            success: true,
            fileName: fileName,
            totalItems: selectedItems.length,
            estimatedTotal: totalEstimate
        };

    } catch (error) {
        console.error('Error generating PDF:', error);
        return { success: false, error: error.message };
    }
};
