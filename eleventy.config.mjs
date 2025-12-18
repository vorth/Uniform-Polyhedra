
export default function (eleventyConfig)
{
  // Add collections for each folder
  eleventyConfig.addCollection("omnitruncates", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.inputPath?.includes('/Omnitruncates/'));
  });
  
  eleventyConfig.addCollection("quasiregulars", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.inputPath?.includes('/Quasiregulars/'));
  });
  
  eleventyConfig.addCollection("regulars", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.inputPath?.includes('/Regulars/'));
  });
  
  eleventyConfig.addCollection("snubifications", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.inputPath?.includes('/Snubifications/'));
  });
  
  eleventyConfig.addCollection("trapeziverts", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.inputPath?.includes('/Trapeziverts/'));
  });
  
  eleventyConfig.addCollection("truncates", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.inputPath?.includes('/Truncates/'));
  });

  eleventyConfig.addTemplateFormats("vZome");

  // Copy .vzome files to the output directory
  eleventyConfig.addPassthroughCopy("**/*.vzome");

  // Creates the extension for use
  eleventyConfig.addExtension("vzome", {
    outputFileExtension: "html",
    
    getData: async function(inputPath) {
      // Extract a name from the file path for use in the template
      const parts = inputPath.split('/');
      const filename = parts[parts.length - 1].replace('.vZome', '');
      const folder = parts.length > 1 ? parts[parts.length - 2] : '';
      const vzomeUrl = "../../" + inputPath;
      const permalink = inputPath.replace(/\.vzome$/i, "/");
      // Return the content - the layout will be applied by 11ty

      return {
        title: filename,
        description: `${filename} - A uniform polyhedron from the ${folder} collection`,
        image: `/images/${filename}.png`,
        layout: "vzome.html",
        vzome: vzomeUrl,
        permalink
      };
    },

    // `compile` is called once per .vzome file in the input directory
    compile: async function (inputContent, inputPath) {
      // This is the render function, `data` is the full data cascade
      return async (data) => {
        // Generate the URL for the .vzome file
        return `---
---`;
      };
    },
  });
};