Jekyll::Hooks.register([:pages, :documents], :post_render) do |page|
  next unless page.output_ext == ".html"
  next unless page.output.include?("</head>")

  tag = '<link rel="stylesheet" href="/assets/css/custom.css">'
  page.output = page.output.sub("</head>", "#{tag}</head>")
end
