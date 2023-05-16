import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";
import useTransactions from "../../hooks/useTransactions";
import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const Details = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut
          options={{
            responsive: true,
            maintainAspectRatio: true
          }}
          data={chartData}
        />
      </CardContent>
    </Card>
  );
};

export default Details;
