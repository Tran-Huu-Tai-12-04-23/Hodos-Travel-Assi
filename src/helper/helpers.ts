export const config = {
  headerTitleStyle: {
    color: "white",
  },
  headerTintColor: "#fff",
  headerBackTitleVisible: false,
};

const Helper = {
  formatVND: (money: number, prefix = "VNĐ") => {
    return new Intl.NumberFormat("vi-VN").format(money || 0) + " " + prefix;
  },

  formatTime: (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Create a formatted time string
    return `${hours}h ${minutes}m ${seconds}s`;
  },
  convertMilliseconds: (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  },
};

export default Helper;

export function vndToUsd(amountInVnd: number) {
  const exchangeRate = 23000;
  const amountInDollar = amountInVnd / exchangeRate;
  return amountInDollar.toFixed(2);
}

export function formatVnd(amountInVnd: number) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return formatter.format(amountInVnd);
}
