import Blog from "../Pages/Blog";

describe("Blog",()=>{
  it("Verify the hero text exists properly or not",()=>{
      Blog.visit();
      Blog.heroTextCheck();
      
  })
  it("Verify recently published visible or not",()=>{
      Blog.visit();
      Blog.publish();
      
  })

  it("Verify read more button is working or not",()=>{
      Blog.visit();
      Blog.checkReadMore1();
      
      
  })

  it("Verify another read more button is working or not",()=>{
      Blog.visit();
      Blog.checkReadMore2();
      

  })
  it("Verify clicking on amazon category will give related blogs",()=>{
      Blog.visit();
      Blog.amazonButton();
      
  })
  it("Verify clicking on aws partner category will give related blogs",()=>{
      Blog.visit();
      Blog.awsPartnerButton();
      
  })

  it("Verify clicking on cloud computing category will give related blogs",()=>{
      Blog.visit();
      Blog.cloudComputingButton();
      
  })

  it("Verify clicking on cost optimization category will give related blogs",()=>{
      Blog.visit();
      Blog.costOptimizationButton();
      
  })


  it("Verify clicking on cloud native category will give related blogs",()=>{
      Blog.visit();
      Blog.clodNativeButton();
      
  })

  it("Verify clicking on cloud native category will give related blogs",()=>{
      Blog.visit();
      Blog.clodNativeButton();
      
  })

  it("Verify clicking on product management category will give related blogs",()=>{
      Blog.visit();
      Blog.productManagementButton();
      
  })

  it("Verify clicking on svelte category will give related blogs",()=>{
      Blog.visit();
      Blog.svelteButton();
      
  })

  it("Verify clicking on javascript category will give related blogs",()=>{
      Blog.visit();
      Blog.javascriptButton();
      
  })

  it("Verify no lbog message will arise if there is no blogs",()=>{
      
      Blog.noBlog();
      
  })



})