//API response decode based on type of response
export const decodeResponse = response => {
    if (!response) {
      return;
    }
    let data;
    switch (typeof response) {
      case "string":
        data = JSON.parse(response);
        break;
      case "object":
        data = response.data;
        break;
      default:
        data = {};
    }
    return data;
  };
  