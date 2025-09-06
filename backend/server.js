const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();
app.use(cors());

const PORT = 5000;
const BASE_URL = "https://www.thesportsdb.com/api/v1/json/123/";

// Função para fazer requisições usando https
const fetchFromAPI = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        // Recebe os dados em partes
        res.on("data", (chunk) => {
          data += chunk;
        });

        // Quando a resposta estiver completa
        res.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
          } catch (error) {
            console.error("Erro ao fazer parse do JSON:", data); // Log para depuração
            reject(new Error(`Erro ao fazer parse do JSON: ${error.message}`));
          }
        });
      })
      .on("error", (err) => {
        console.error("Erro na requisição HTTPS:", err.message); // Log para depuração
        reject(new Error(`Erro na requisição HTTPS: ${err.message}`));
      });
  });
};

// Rota para buscar jogos futuros de uma liga
app.get("/api/eventsnextleague/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromAPI(`${BASE_URL}eventsnextleague.php?id=${id}`);
    res.json(data);
  } catch (error) {
    console.error(`Erro ao buscar jogos futuros da liga ${id}:`, error.message);
    res.status(500).json({ error: "Erro ao buscar jogos futuros." });
  }
});

// Rota para buscar jogos passados de uma liga
app.get("/api/eventspastleague/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromAPI(`${BASE_URL}eventspastleague.php?id=${id}`);
    res.json(data);
  } catch (error) {
    console.error(`Erro ao buscar jogos passados da liga ${id}:`, error.message);
    res.status(500).json({ error: "Erro ao buscar jogos passados." });
  }
});

app.get("/api/lookupleague/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromAPI(`${BASE_URL}lookupleague.php?id=${id}`);
    if (data && data.leagues && data.leagues.length > 0) {
      res.json(data.leagues[0]); // Retorna apenas o primeiro elemento do array
    } else {
      res.status(404).json({ error: "Liga não encontrada." });
    }
  } catch (error) {
    console.error(`Erro ao buscar informações da liga ${id}:`, error.message);
    res.status(500).json({ error: "Erro ao buscar informações da liga." });
  }
});

// Nova rota para buscar dados de múltiplas ligas
app.get("/api/ligas", async (req, res) => {
  const ligas = [
    { id: 5201, nome: "Brazil Brasileiro Women" },
    { id: 4521, nome: "American NWSL" },
    { id: 4887, nome: "FA Womens League Cup" },
    { id: 4849, nome: "English Womens Super League" },
    { id: 4805, nome: "Australian A-League Women" },
    { id: 4565, nome: "FIFA Womens World Cup" },
    { id: 5384, nome: "Olympics Soccer Women" },
  ];

  try {
    // Prioriza ligas brasileiras
    const ligasPrioritarias = ligas.sort((a, b) => {
      if (a.nome.includes("Brazil") && !b.nome.includes("Brazil")) return -1;
      if (!a.nome.includes("Brazil") && b.nome.includes("Brazil")) return 1;
      return 0;
    });

    // Seleciona as 3 primeiras ligas
    const ligasSelecionadas = ligasPrioritarias.slice(0, 3);

    // Faz as requisições para as ligas selecionadas
    const resultados = await Promise.all(
      ligasSelecionadas.map(async (liga) => {
        const jogosFuturos = await fetchFromAPI(`${BASE_URL}eventsnextleague.php?id=${liga.id}`);
        const jogosPassados = await fetchFromAPI(`${BASE_URL}eventspastleague.php?id=${liga.id}`);
        const infoLiga = await fetchFromAPI(`${BASE_URL}lookupleague.php?id=${liga.id}`);

        return {
          id: liga.id,
          nome: liga.nome,
          jogosFuturos: jogosFuturos.events || [],
          jogosPassados: jogosPassados.events || [],
          info: infoLiga.leagues ? infoLiga.leagues[0] : null,
        };
      })
    );

    res.json(resultados);
  } catch (error) {
    console.error("Erro ao buscar dados das ligas:", error.message);
    res.status(500).json({ error: "Erro ao buscar dados das ligas." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
