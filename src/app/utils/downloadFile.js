const download = fileUrl => {
    const headers = new Headers({
       // mode: 'no-cors'
    });
  fetch(fileUrl, {headers}).then(res => res.blob()).then(blob => {
      const url = URL.createObjectURL(blob);
      const Aele = document.createElement('a');
      Aele.download = 'hhh.jpg';
      Aele.href = url;
      Aele.click();
  }).catch(() => {
      console.log('粗错了')
  })
};

export default download;
