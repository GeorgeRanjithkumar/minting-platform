import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { shadows } from "@mui/system";

const ariaLabel = { "aria-label": "description" };

const card = (
  <React.Fragment>
    <CardContent sx={{ padding: "3%", font: "DSemi, monospace" }}>
      <Button sx={{ marginLeft: "800px", color: "green" }} variant="outlined">
        Connect Wallet
      </Button>
      <Typography sx={{ fontSize: 50, fontWeight: "800" }}>
        Ixiono NFT Minting-Platform
      </Typography>
      <br></br>
      <Typography sx={{ fontSize: "21px" }}>
        Simple Press Button to Mint.
      </Typography>
      <br></br>
      <div>
        <Typography sx={{ fontSize: 35, fontWeight: "600" }}>
          Remaining NFT'S
        </Typography>
        <Input
          sx={{ width: "700px" }}
          placeholder="e.g 72"
          inputProps={ariaLabel}
        />
      </div>
      <div>
        <br></br>
        <Typography sx={{ fontSize: 35, fontWeight: "600" }}>Name:</Typography>
        <Input
          sx={{ width: "700px" }}
          placeholder="Ixiono"
          inputProps={ariaLabel}
        />
      </div>
      <div>
        <br></br>
        <Typography sx={{ fontSize: 35, fontWeight: "600" }}>Price:</Typography>
        <Input
          sx={{ width: "700px" }}
          placeholder="e.g 1 SOL"
          inputProps={ariaLabel}
        />
      </div>
      <br></br>
      <br></br>
      <CardActions>
        <Button variant="contained">Mint NFT</Button>
      </CardActions>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <div
      style={{
        //   backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWP2sZgGnf5z5K9W5mAdvtTKdmqbKlMW4hA&usqp=CAU')`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(270deg,rgb(171, 102, 255) 0%, rgb(20, 241, 149) 101.39%)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          padding: "5%",
          marginLeft: "240px !important",
        }}
      >
        <Card
          style={{
            width: "100%",
            boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius:'2%'
          }}
          variant="outlined"
        >
          {card}
        </Card>
      </Box>
    </div>
  );
}
