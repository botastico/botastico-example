require("dotenv").config();

const fs = require("fs");
const { blob } = require("buffer");
const mime = require("mime");

const { BOTASTICO_API_KEY, BOTASTICO_API_BASE_URL } = process.env;
const headers = { Authorization: `Bearer ${BOTASTICO_API_KEY}`, "Content-Type": "application/json" };

// https://apidocs.botasti.co/#/Agents/get_v1_agents
const getAgents = async () => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Agents/get_v1_agents
const getAgent = async (id) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents?agent_ids=${id}`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Agents/put_v1_agents__agent_id_
const putAgent = async (id, body) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Agents/deleteAgent
const deleteAgent = async (id) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}`, {
    method: "DELETE",
    headers,
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Agents/post_v1_agents
const postAgent = async (body) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Interactions/get_v1_agents__agent_id__interactions
const getInteractions = async (id) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/interactions`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Interactions/post_v1_agents__agent_id__interactions
const postInteractions = async (id, body) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/interactions`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Kb/get_v1_agents__agent_id__kb
const getKbDocs = async (id) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/kb`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Kb/delete_v1_agents__agent_id__kb
const deleteKbDocs = async (id) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/kb`, {
    method: "DELETE",
    headers,
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Kb/delete_v1_agents__agent_id__kb__kbdoc_id_
const deleteKbDoc = async (id, kbDocId) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/kb/${kbDocId}`, {
    method: "DELETE",
    headers,
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Kb/post_v1_agents__agent_id__kb_file
const postKbDocFile = async (id) => {
  const name = "sample.txt";
  const path = "./sample.txt";
  const type = mime.getType(path);
  const body = new FormData();
  const blob = new Blob([fs.readFileSync(path)], { type });
  body.append("file", blob, name);
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/kb/file`, {
    method: "POST",
    headers: { Authorization: `Bearer ${BOTASTICO_API_KEY}` },
    body,
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Kb/post_v1_agents__agent_id__kb_url
const postKbDocUrls = async (id, urls) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/kb/url`, {
    method: "POST",
    headers,
    body: JSON.stringify({ urls }),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Kb/post_v1_agents__agent_id__kb_urls_scrape
const scrapeKbDocUrls = async (id, urls) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/kb/urls/scrape`, {
    method: "POST",
    headers,
    body: JSON.stringify({ urls }),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/post_v1_agents__agent_id__scrapedomains
const postScrapedomain = async (id, body) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/get_v1_agents__agent_id__scrapedomains__scrapedomain_id__crawl
const crawlScrapedomain = async (id, scrapedomainId, timeout = 15) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains/${scrapedomainId}/crawl?timeout=${timeout}`, {
    headers,
  });
  const data = await response.text();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/get_v1_agents__agent_id__scrapedomains__scrapedomain_id__sitemap_urls
const getScrapedomainSitemapUrls = async (id, scrapedomainId) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains/${scrapedomainId}/sitemap_urls`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/get_v1_agents__agent_id__scrapedomains__scrapedomain_id__sitemap
const getScrapedomainSitemap = async (id, scrapedomainId) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains/${scrapedomainId}/sitemap`, { headers });
  const data = await response.text();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/get_v1_agents__agent_id__scrapedomains
const getScrapedomains = async (id) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/put_v1_agents__agent_id__scrapedomains__scrapedomain_id_
const putScrapedomain = async (id, scrapedomainId, body) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains/${scrapedomainId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/get_v1_agents__agent_id__scrapedomains__scrapedomain_id_
const getScrapedomain = async (id, scrapedomainId) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains/${scrapedomainId}`, { headers });
  const data = await response.json();
  return data;
};

// https://apidocs.botasti.co/#/Crawl%2FScrape/delete_v1_agents__agent_id__scrapedomains__scrapedomain_id_
const deleteScrapedomain = async (id, scrapedomainId) => {
  const response = await fetch(`${BOTASTICO_API_BASE_URL}/agents/${id}/scrapedomains/${scrapedomainId}`, {
    method: "DELETE",
    headers,
  });
  const data = await response.json();
  return data;
};

(async () => {
  try {
    const newAgent = await postAgent({ agent_name: "string" });
    const agents = await getAgents();
    const agent = await getAgent(agents[0].agent_id);
    const updatedAgent = await putAgent(agent.agent_id, { agent_name: "string" });
    const interactions = await getInteractions(agents[0].agent_id);
    const interaction = await postInteractions(agents[0].agent_id, { prompt: "hello world" });
    const kbDocFile = await postKbDocFile(agents[0].agent_id);
    const kbDocUrls = await postKbDocUrls(agents[0].agent_id, ["https://nextjs.org"]);
    const kbDocs = await getKbDocs(agents[0].agent_id);
    const deletedKbDocs = await deleteKbDocs(agents[0].agent_id);
    const deletedKbDoc = await deleteKbDoc(agents[0].agent_id, kbDocs[0].kb_doc_id);
    const scrapedKbDocUrls = await scrapeKbDocUrls(agents[0].agent_id, ["https://nextjs.org"]);
    const scrapedomain = await postScrapedomain(agents[0].agent_id, { domain_url: "https://nextjs.org" });
    const sitemap = await getScrapedomainSitemap(agents[0].agent_id, scrapedomain.scrapedomain_id);
    const sitemapUrls = await getScrapedomainSitemapUrls(agents[0].agent_id, scrapedomain.scrapedomain_id);
    const scrapedomains = await getScrapedomains(agents[0].agent_id);
    const updatedScrapedomain = await putScrapedomain(agents[0].agent_id, Object.keys(scrapedomains)[0], {
      info_email: "info@botasti.co",
    });
    const crawlResponse = await crawlScrapedomain(agents[0].agent_id, Object.keys(scrapedomains)[0]);
    const deletedScrapedomain = await deleteScrapedomain(agents[0].agent_id, Object.keys(scrapedomains)[0]);
    const deletedAgent = await deleteAgent(agents[0].agent_id);
  } catch (error) {
    console.log("error: ", error);
  }
})();
