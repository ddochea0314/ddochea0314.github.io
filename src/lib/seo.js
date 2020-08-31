export default(siteType, siteUrl, siteName, title, description, keywords) => {
  const meta = [{
    name : "twitter:card",
    content: "summary_large_image"
  }];
  if(siteType) {
    meta.push({
      name : "og:type",
      property: "og:type",
      content: siteType
    });
  }
  if(siteUrl) {
    meta.push({
      name : "og:url",
      property: "og:url",
      content: siteUrl
    },
    {
      name : "twitter:site",
      content: siteUrl
    });
  }
  if(siteName) {
    meta.push({
      name : "site_name",
      property: "site_name",
      content : siteName
    },
    {
      name : "og:site_name",
      property: "og:site_name",
      content : siteName
    },
    {
      name : "twitter:title",
      content: siteName
    })
  }
  if(title) {
    meta.push({
      name : "og:title",
      property: "og:title",
      content: title
    })
  }
  if(description) {
    meta.push({
      name : "og:description",
      property: "og:description",
      content: description
    },
    {
      name : "twitter:description",
      content: description
    })
  }
  if(keywords) {
    meta.push({
      name : "og:keywords",
      property: "og:keywords",
      content: keywords
    },
    {
      name : "keywords",
      property: "keywords",
      content: keywords
    })
  }
  return meta.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}