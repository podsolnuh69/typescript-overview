interface Rectangle {
  readonly id: number;
  color?: string; // ? - необязательное поле
  size: {
    width: number;
    height: number;
  };
}

const rectangle1: Rectangle = {
  id: 0,
  color: "purple",
  size: {
    width: 2,
    height: 3.222,
  },
};

const rectangle2: Rectangle = {
  id: 1,
  color: "red",
  size: {
    width: 3333333,
    height: 99,
  },
};

const rectangle3 = {} as Rectangle; // говорит компилятору чтобы объект исходного типа рассматривался как объект справа
const rectangle4 = <Rectangle>{}; // альтернативная запись

// ====

interface RectangleWithArea extends Rectangle {
  getArea: () => number;
}

const rectangle5: RectangleWithArea = {
  id: 333,
  size: {
    width: 33,
    height: 224,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// =====

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  borderRadius: "50%",
  marginTop: "2px",
};
