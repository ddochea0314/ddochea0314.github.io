export default(siteType, siteUrl, siteName, title, description, keywords) => {
  const meta = [{
    name : "twitter:card",
    content: "summary_large_image"
  },
  {
    name : "og:image",
    content: "~/assets/images/author.png"
  },
  {
    name : "twitter:image",
    content: "~/assets/images/author.png"
  },
];
  if(siteType) {
    meta.push({
      property: "og:type",
      content: siteType
    });
  }
  if(siteUrl) {
    meta.push({
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
      // property: "site_name",
      content : siteName
    },
    {
      // name : "og:site_name",
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
      // name : "og:title",
      property: "og:title",
      content: title
    })
  }
  if(description) {
    meta.push({
      name : "description",
      content: description
    },
    {
      // name : "og:description",
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
      // name : "og:keywords",
      property: "og:keywords",
      content: keywords
    },
    {
      name : "keywords",
      // property: "keywords",
      content: keywords
    })
  }
  return meta.sort((a, b) => {
    
    var nameA = a.name? a.name.toUpperCase() : a.property.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name? b.name.toUpperCase() : b.property.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}