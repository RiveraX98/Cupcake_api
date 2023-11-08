const url = "http://127.0.0.1:5000";
async function showAll(e) {
  e.preventDefault();
  let res = await axios.get(`${url}/api/cupcakes`);
  let cupcakes = res.data.cupcakes;
  showCakes(cupcakes);
}

$("#showAll").click(showAll);

async function createCake(e) {
  e.preventDefault();
  flavor = $("#flavor").val();
  size = $("#size").val();
  rating = $("#rating").val();
  image = $("#image").val();

  let res = await axios.post(`${url}/api/cupcakes`, {
    flavor: flavor,
    size: size,
    rating: rating,
    image: image,
  });

  showCakes([res.data.cupcake]);
}

function showCakes(cupcakes) {
  $(".showCake").empty();

  for (let i = 0; i <= cupcakes.length - 1; i++) {
    $(".showCake").append(`<div id=cupcake${i} class=cakes></div>`);

    $(`#cupcake${i}`).append(
      `<h4 style= "text-decoration:underline";>${cupcakes[i].flavor}</h4>`
    );

    $(`#cupcake${i}`).append(`<ul id=ul${[i]}></ul>`);

    if (cupcakes[i].image != "") {
      $(`#ul${i}`).append(
        `<img src="${cupcakes[i].image}" style="width: 100px; height: 100px">`
      );
    }

    $(`#ul${i}`).append(`<li>Size: ${cupcakes[i].size}</li>`);
    $(`#ul${i}`).append(`<li> Rating: ${cupcakes[i].rating}</li>`);
  }
}

$("#add").click(createCake);
