
const designs = [
    {
      id: 1,
      name: 'ManagerMe',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FT2QkIpBE5vB6dNR9i3ntLL%2FManagerMe%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign'
    },
    {
      id: 2,
      name: 'ShopLoop',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FakE3TpNlKxsXb5GBWgLpvV%2FShopLoop%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign'
    },
    {
      id: 3,
      name: 'JustDumb',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiWMdxfKUP8CgjzuAmlhiLN%2FJustDumb%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign'
    },
    {
      id: 4,
      name: 'ReadStories',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUHrrI1ar3AYvzPvSLKIyMf%2FReadStories%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign'
    },
    {
      id: 5,
      name: 'SchoolsList',
      url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fj66UIuGUqHik2cUEBGa9ca%2FSchoolsList%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign'
    }
  ];
  
  let openDesignId = null;
  
  const container = document.getElementById('designs-container');
  
  designs.forEach(design => {
    const wrapper = document.createElement('div');
    wrapper.className = 'design collapsed';
    wrapper.dataset.id = design.id;
  
    const header = document.createElement('div');
    header.className = 'design-header';
    header.innerHTML = `<h4>${design.name}</h4>`;
  
    const iframe = document.createElement('iframe');
    iframe.className = 'design-iframe';
    iframe.src = design.url;
    iframe.style.display = 'none';
  
    const spinner = document.createElement('div');
    spinner.className = 'fancy-spinner';
    spinner.innerHTML = `<div class="ring"></div><div class="ring"></div><div class="dot"></div>`;
  
    header.addEventListener('click', () => {
      const isOpen = openDesignId === design.id;
  
      document.querySelectorAll('.design').forEach(el => {
        el.classList.remove('open');
        el.classList.add('collapsed');
        el.querySelector('iframe').style.display = 'none';
        el.querySelector('.fancy-spinner').style.display = 'none';
      });
  
      if (!isOpen) {
        openDesignId = design.id;
        wrapper.classList.add('open');
        wrapper.classList.remove('collapsed');
        iframe.style.display = 'block';
        spinner.style.display = 'block';
      } else {
        openDesignId = null;
      }
    });
  
    iframe.addEventListener('load', () => {
      spinner.style.display = 'none';
      iframe.style.height = "550px"
    });
  
    wrapper.appendChild(header);
    wrapper.appendChild(iframe);
    wrapper.appendChild(spinner);
    container.appendChild(wrapper);
  });
  