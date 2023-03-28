var lineGraph = {
  css: null,
  exports: {
    updateCanvas() {
      let canvas = this.$("canvas");
      let cx = canvas.getContext("2d");

      //Default context properties
      cx.textBaseline = "middle";
      cx.textAlign = "center";
      let width = canvas.width;
      let height = canvas.height;
      let spacing = 1; //Controls the spacing between each horizontal elements

      let data = this.state.data;
      cx.clearRect(0, 0, width, height);
      if (!data) return;
      let total = data.reduce((total, current) => total + current.value, 0);
      let curr = 0;
      let counter = 0;
      for (let field of data) {
        let start = curr + spacing;
        let barWidth = field.value / total * width - spacing * 2;
        let text = `${Math.round(field.value / total * 1000) / 10}% (${field.name})`;
        cx.fillStyle = this.colors[counter];
        cx.fillRect(start, 0, barWidth, height / 3);
        cx.fillStyle = "#FFFFFF";
        if (cx.measureText(text).width < barWidth) {
          cx.fillText(text, start + barWidth / 2, height / 6);
        } else if (cx.measureText("...").width < barWidth) {
          cx.fillText("...", start + barWidth / 2, height / 6);
        }
        curr += field.value / total * width;
        counter++;
      }
    },
    onMounted() {
      this.colors = ["#003F5C", "#2F4B7C", "#665191", "#A05195", "#D45087"];
      this.state.data = [{
        name: "P",
        value: 52
      }, {
        name: "AB",
        value: 43
      }, {
        name: "B",
        value: 2
      }, {
        name: "TB",
        value: 1
      }, {
        name: "TBF",
        value: 0
      }];
      let canvas = this.$("canvas");
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      this.updateCanvas();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div style="height: inherit; width: inherit; padding: inherit; margin: inherit;"><canvas style="height: 100%; width: 100%;"></canvas></div>', []),
  name: 'line-graph'
};

export { lineGraph as default };
