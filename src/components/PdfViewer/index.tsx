import { useEffect } from 'react';
import * as pdfjsLib from "pdfjs-dist/build/pdf";
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

interface PdfViewerProps {
  url: string;
}
const PdfViewer = ({ url }: PdfViewerProps) => {
  const renderPdf = (pdfFile: any) => {
    for (let i = 1; i < pdfFile.numPages; i++) {
      let canvas = document.createElement('canvas')

      canvas.id = `pdf${i}`
      let canvasContext = canvas.getContext('2d')
      // 通过getPage的方法获取到每一页的内容渲染，结束后把当前创建的canvas添加到页面中
      pdfFile.getPage(i).then((page: any) => {
        let viewport = page.getViewport({ scale: 1 });
        let newScale = 375 / viewport.width;//这里根据实际情况来，设计稿为宽375的iphone
        viewport = page.getViewport({ scale: newScale }); //按设备宽等比例缩放pdf文件
        const realCanvas = canvasContext!.canvas;
        let outputScale = window.devicePixelRatio || 1;//按像素缩放调节清晰度
        realCanvas.width = Math.floor(viewport.width * outputScale);//将pdf缩放到对应屏幕大小
        realCanvas.height = Math.floor(viewport.height * outputScale);
        realCanvas.style.width = "100%"; //显示区域宽度撑满
        realCanvas.style.height = "100%";  //显示区域高度撑满
        let transform =
          outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
        page.render({ canvasContext, viewport, transform });
      })
      // 获取到页面定义好的父元素，把生成的canvas添加进去
      document.getElementById('pdfList')!.appendChild(canvas)
    }
  }

  useEffect(() => {
    let loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise
      .then((pdf: any) => {
        renderPdf(pdf);
      })
      .catch((error: any) => {
        console.log(error);
      })
  }, [url]);

  return (
    <div id='pdfList' ></div>
  )
};

export default PdfViewer;