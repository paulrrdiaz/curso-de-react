import React from "react";
import { Card, CardTitle, CardDescription } from './styles'

export default ({
  title = "Default Title",
  description = "Default Description"
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};
