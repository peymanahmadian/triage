export const convertNumber = (inputNumber) => {

  if (isNaN(Number(inputNumber))) {
    let param = String(inputNumber);
    if (param.length) {
      let arr = param.split("");
      arr.forEach((item, index) => {
        switch (item) {
          case "۱":
            arr[index] = "1";
            break;
          case "۲":
            arr[index] = "2";
            break;
          case "۳":
            arr[index] = "3";
            break;
          case "۴":
            arr[index] = "4";
            break;
          case "۵":
            arr[index] = "5";
            break;
          case "۶":
            arr[index] = "6";
            break;
          case "۷":
            arr[index] = "7";
            break;
          case "۸":
            arr[index] = "8";
            break;
          case "۹":
            arr[index] = "9";
            break;
          case "۰":
            arr[index] = "0";
            break;
          default:

            break;
        }

      });
      return parseInt(arr.reduce((i, concat) => i + concat))
    }
    else {
      return 0;
    }
  }
  else {
    return Number(inputNumber)

  }

};
