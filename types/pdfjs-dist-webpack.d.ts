// types/pdfjs-dist-webpack.d.ts
declare module 'pdfjs-dist/webpack' {
    import { PDFJSStatic } from 'pdfjs-dist';
    const pdfjs: PDFJSStatic;
    export { pdfjs };
  }
  