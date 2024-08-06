import html2canvas from 'html2canvas';

export default async function OgImage() {
  const element=document.getElementsByClassName("download-card")[0];
  const canvas = await html2canvas(element);
  const dataURL = canvas.toDataURL('image/png');
  element.style.display="none";
  return dataURL;
}