var lineGraph = {
  css: null,
  exports: {
    updateCanvas() {
      let canvas = this.$("canvas");
      if (!canvas || !this.props.data || !this.props.title) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      let cx = canvas.getContext("2d");
      cx.textBaseline = "middle";
      cx.textAlign = "center";
      let width = canvas.width;
      let height = canvas.height;
      let spacing = 1;
      let data = this.props.data;
      let colors = ["#003F5C", "#2F4B7C", "#665191", "#A05195", "#D45087", "#D47150"];
      cx.clearRect(0, 0, width, height);
      cx.resetTransform();
      if (!data) return;
      cx.fillStyle = "#707070";
      cx.font = "15px Arial";
      cx.fillText(this.props.title || "Example", width / 2, 10);
      cx.font = "10px Arial";
      cx.translate(0, 20);
      let total = data.reduce((total, current) => total + current.value, 0);
      let curr = 0;
      let counter = 0;
      let legendWidth = 0;
      for (let field of data) {
        if (field.value == 0) continue;
        let start = curr + spacing;
        let barWidth = field.value / total * width - spacing * 2;
        let text = `${Math.round(field.value / total * 1000) / 10}% (${field.short || field.name})`;
        cx.fillStyle = colors[counter];
        cx.fillRect(start, 0, barWidth, height / 3);
        cx.fillStyle = "#FFFFFF";
        if (cx.measureText(text).width < barWidth) {
          cx.fillText(text, start + barWidth / 2, height / 6);
        } else if (cx.measureText(`${Math.round(field.value / total * 1000) / 10}%`).width < barWidth) {
          cx.fillText(`${Math.round(field.value / total * 1000) / 10}%`, start + barWidth / 2, height / 6);
        }
        curr += field.value / total * width;
        counter++;
        let legendText = field.name + (field.short ? ` (${field.short})` : "");
        legendWidth += cx.measureText(legendText).width + 25 + 15;
      }
      cx.textAlign = "left";
      legendWidth -= 15; //On enlève la dernière marge
      cx.translate(width / 2 - legendWidth / 2, height / 4 + 20);
      counter = 0;
      for (let field of data) {
        if (field.value == 0) continue;
        cx.fillStyle = colors[counter];
        cx.fillRect(0, 0, 25, 25);
        cx.fillStyle = "#707070";
        let legendText = field.name + (field.short ? ` (${field.short})` : "");
        cx.fillText(legendText, 30, 12.5);
        cx.translate(cx.measureText(legendText).width + 25 + 15, 0);
        counter++;
      }
    },
    onMounted() {
      let canvas = this.$("canvas");
      this.updateCanvas();
      new ResizeObserver(this.updateCanvas).observe(canvas);
    },
    onUpdated(props, state) {
      this.updateCanvas();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div style="height: inherit; width: inherit;"><canvas style="height: 100%; width: 100%;"></canvas></div>', []),
  name: 'line-graph'
};

export { lineGraph as default };
