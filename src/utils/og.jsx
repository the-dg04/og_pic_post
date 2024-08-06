import html2canvas from 'html2canvas';
import { useEffect, useState } from "react";
import * as Fs from 'fs'

export function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
  byteString = atob(dataURI.split(',')[1]);
else
byteString = unescape(dataURI.split(',')[1]);

// separate out the mime component
var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

// write the bytes of the string to a typed array
var ia = new Uint8Array(byteString.length);
for (var i = 0; i < byteString.length; i++) {
  ia[i] = byteString.charCodeAt(i);
}

return new Blob([ia], {type:mimeString});
}

export default async function OgImage() {
  const element=document.getElementsByClassName("download-card")[0];
  const canvas = await html2canvas(element);
  const dataURL = canvas.toDataURL('image/png');
  element.style.display="none";
  console.log(dataURL);
  return dataURL;
}