function status(request, response) {
  response.status(200).json({ chave: "Evolução!" });
}

export default status;
