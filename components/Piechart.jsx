import { useEffect } from "react";

const PieChart = ({ totalEasy, totalModerate, totalDifficult }) => {
  useEffect(() => {
    let chart;

    const loadGoogleCharts = () => {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    };

    const drawChart = () => {
      const data = google.visualization.arrayToDataTable([
        ["Difficulty Level", "Marks"],
        ["Easy", totalEasy],
        ["Moderate", totalModerate],
        ["Difficult", totalDifficult],
      ]);

      const options = {
        title: "",
        is3D: true,
        colors: ["#3366cc", "#dc3912", "#ff9900"],
        chartArea: {
          width: window.innerWidth < 500 ? "100%" : "70%",
          height: "80%",
        },
        legend: { position: "bottom" },
      };

      chart = new google.visualization.PieChart(
        document.getElementById("piechart_3d")
      );
      chart.draw(data, options);
    };

    const handleResize = () => {
      if (chart) {
        drawChart(); // Redraw chart on window resize
      }
    };

    if (totalEasy > 0 || totalModerate > 0 || totalDifficult > 0) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.onload = loadGoogleCharts;
      document.body.appendChild(script);

      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chart) {
        chart.clearChart(); // Clear chart on component unmount
      }
      document.getElementById("piechart_3d").innerHTML = "";
    };
  }, [totalEasy, totalModerate, totalDifficult]);

  return (
    <>
      <h3 className="text-[13px] sm:text-[15px] font-bold text-center">
        Questions according to Difficulty level
      </h3>
      <div
        id="piechart_3d"
        className="w-[280px] sm:w-[300px] lg:w-full h-full "
        style={{ margin: "0 auto", textAlign: "center" }}
      ></div>
    </>
  );
};

export default PieChart;
