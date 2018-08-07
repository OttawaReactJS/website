# website
🏡 OttawaReactJS website

#Deployment Instructions
In order to deploy to production website, you need to be within the 'develop' branch and run the following shell commands:

- npm run build (to create an optimized deployment files under the 'build' folder)
- npm run deploy (to push up the contents of the build folder into gh-pages branch)
- go into https://github.com/OttawaReactJS/website/settings --> Ensure that Custom Domain says 'www.reactottawa.ca'
- go to https://www.reactottawa.ca and your changes should be there.
