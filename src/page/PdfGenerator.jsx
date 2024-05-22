// import { useState } from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

// function PdfGenerator() {
//     const [pdfContent, setPdfContent] = useState('');
//     const [show , setshow] = useState(false);

//     const generatePdf = async () => {
//         // Render your React component to an HTML element
//         const content = document.getElementById('contentToRender');

//         // Convert the HTML element to an image using html2canvas
//         const canvas = await html2canvas(content);

//         // Convert the canvas to a base64 image
//         const imgData = canvas.toDataURL('image/png');

//         // Create a new jsPDF instance
//         const pdf = new jsPDF();

//         // Add the image to the PDF
//         pdf.addImage(imgData, 'PNG', 0, 0);

//         // Save the PDF
//         pdf.save('output.pdf');
//     };

//     return (
//         <div>
//             {/* Your React component to be included in the PDF */}
//             <div className={` pt-24 mb-11 `} >
//                 <div id="contentToRender" className=' pb-8' >
//                     {/* Your React code output goes here */}
//                     {/* For example */}
//                     <h1>Hello, World!</h1>
//                     <p>This is the content I want to include in the PDF.</p>
//                     <p>This is the content I want to include in the PDF.</p>
//                     <p>This is the content I want to include in the PDF.</p>
//                     <p>This is the content I want to include in the PDF.</p>
//                 </div>

//                 {/* Button to trigger PDF generation */}
//             </div>
//                 <button className=' pt-24' onClick={generatePdf}>Generate PDF</button>

//         </div>
//     );
// }

// export default PdfGenerator;





import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Invoice = ({ data }) => {
    const contentRef = useRef(null);

    const generatePdf = async () => {
        const content = contentRef.current;

        try {
            // Capture the content of the contentToRender div using html2canvas
            const canvas = await html2canvas(content);

            // Convert the canvas to a data URL representing a PNG image
            const imgData = canvas.toDataURL('image/png');

            // Create a new jsPDF instance
            const pdf = new jsPDF();

            // Add the image to the PDF document
            pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

            // Save the PDF document
            pdf.save('invoice.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className="pt-24 pb-8">
            <div id="contentToRender" className=' w-[100%]' ref={contentRef}>
                {/* Your invoice content goes here */}
                {/* Example content */}
                <h1>Invoice</h1>
                <p>Invoice content... Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, culpa magni labore, dolor recusandae quo facere doloribus quasi iure quisquam fuga autem animi! Iure suscipit at eum, ut molestiae corporis est a, nisi voluptatum ipsam delectus exercitationem, laborum laudantium. Molestiae recusandae quisquam architecto, voluptates sit illum laborum cumque deserunt natus?</p>
            </div>
            <button className="pt-24" onClick={generatePdf}>Generate PDF</button>
        </div>
    );
};

export default Invoice;

