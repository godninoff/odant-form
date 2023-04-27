import "./App.css";
import logo from "./images/logo.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const tableResource = [
  {
    id: 1,
    resource: "Ресурс 1",
    system: "Система  1",
    variation: "Изменение 1",
    units: "Единица 1",
  },
  {
    id: 2,
    resource: "Ресурс 2",
    system: "Система  2",
    variation: "Изменение 2",
    units: "Единица 2",
  },
];

const tableObject = [
  {
    id: 1,
    name: "Объект 1",
    start: "23.03.2023",
    finish: "23.03.2025",
    responsible: "Менеджер 1",
  },
  {
    id: 2,
    name: "Объект 2",
    start: "12.12.2023",
    finish: "12.12.2025",
    responsible: "Менеджер 2",
  },
];

function App() {
  return (
    <div className="App">
      <img
        style={{ maxWidth: "100%" }}
        src={logo}
        alt="логотип компании"
        height={200}
      />
      <Box
        autoComplete="off"
        sx={{
          "& > :not(style)": { m: 3, width: "25ch" },
        }}
      >
        <TextField id="outlined-basic" label="Надпроцесс" variant="outlined" />
      </Box>
      <Box
        sx={{
          "& > :not(style)": { m: 3, width: "25ch" },
        }}
        autoComplete="off"
      >
        <TextField label="Время начала" variant="outlined" />
        <TextField label="Процесс" variant="outlined" />
        <TextField label="Время завершения" variant="outlined" />
      </Box>
      <div style={{ maxWidth: "1280px", margin: "2rem auto 0" }}>
        <table>
          <thead>
            <tr>
              <th>Тип ресурса</th>
              <th>Место/Система</th>
              <th>Изменение</th>
              <th>Единицы</th>
            </tr>
          </thead>
          <tbody>
            {tableResource.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.resource}</td>
                  <td>{row.system}</td>
                  <td>{row.variation}</td>
                  <td>{row.units}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>Название</th>
              <th>Начало</th>
              <th>Окончание</th>
              <th>Ответственный</th>
            </tr>
          </thead>
          <tbody>
            {tableObject.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.start}</td>
                  <td>{row.finish}</td>
                  <td>{row.responsible}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
