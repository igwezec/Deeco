


// Fetch products from the API
fetch('https://fakestoreapi.com/products').then(response => response.json()).then(products => {
    const productContainer = document.querySelector('.product-contents');
    const cartIcon = document.getElementById('cart-icon');
    let cartCount = 0;

    // Replace the product cards with data from the API
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      const title = document.createElement('p');
      title.className = 'product-card-title';
      title.textContent = product.category;
      productCard.appendChild(title);

      const image = document.createElement('div');
      image.className = 'product-card-image';
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.title;
      image.appendChild(img);
      productCard.appendChild(image);

      const heading = document.createElement('h3');
      heading.textContent = product.title;
      productCard.appendChild(heading);

      const para = document.createElement('p');
      para.className = 'product-card-para';
      const description = product.description.split(' ').slice(0, 20).join(' ');
      para.textContent = description + '...';
      productCard.appendChild(para);

      const price = document.createElement('h4');
      price.textContent = product.price + ' MAT';
      productCard.appendChild(price);

      // const link = document.createElement('a');
      // link.href = '#';
      // link.className = 'product-card-link';
      // const strong = document.createElement('strong');
      // strong.textContent = 'Add to Cart';
      // link.appendChild(strong);
      // productCard.appendChild(link);

      const addToCartLink = document.createElement('a');
      addToCartLink.href = '#';
      addToCartLink.className = 'product-card-link';
      const addToCartText = document.createElement('strong');
      addToCartText.textContent = 'Add to Cart';
      addToCartLink.appendChild(addToCartText);
      productCard.appendChild(addToCartLink);

      // Handle click event on "Add to Cart" link
      addToCartLink.addEventListener('click', () => {
        cartCount++;
        cartIcon.textContent = cartCount;
      });

      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });



// =====================connect wallet button===================
const walletButton = document.querySelectorAll(".connect-wallet-btn");
// const addressOnCard = document.getElementById("walletAddress");

const updateUI = async () => {
  if (window.ethereum !== undefined) {
    const userWalletAddress = await window.ethereum.request({ method: "eth_accounts" });
    console.log(userWalletAddress);
    
    // const slicedAddress = `${userWalletAddress[0].slice(0, 6)}.....${userWalletAddress[0].slice(userWalletAddress[0].length - 10)}`; 
    // addressOnCard.innerHTML = slicedAddress;
  }

  walletButton.forEach((btn) => {
    btn.innerHTML = "Wallet Connected";
  });
};

async function handleConnectWallet() {
  if (window.ethereum !== undefined) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Oops!!! Please install the MetaMask browser extension to proceed with sending Ethereum on Deeco");
  }
  
  window.localStorage.setItem("connected", "true");
  updateUI();
}

const updateConnectionState = () => {
  if (window.localStorage.getItem("connected")) {
    updateUI();
  }
};

walletButton.forEach((btn) => {
  btn.addEventListener("click", handleConnectWallet);
});

window.addEventListener("DOMContentLoaded", updateConnectionState);























//   // Get the top-nav-container element
// const topNavContainer = document.querySelector('.top-nav-container');

// // Define the scroll height at which the container becomes fixed
// const scrollHeightThreshold = 200; // Adjust the value as needed

// // Function to toggle the fixed position based on scroll height
// function toggleFixedPosition() {
//   if (window.pageYOffset > scrollHeightThreshold) {
//     topNavContainer.classList.add('fixed-top');
//   } else {
//     topNavContainer.classList.remove('fixed-top');
//   }
// }

// // Add event listener for scroll event
// window.addEventListener('scroll', toggleFixedPosition);
