var captionsListButton = document.getElementById("main-navigation__list"),
  questionButton = document.getElementById("question-button"),
  attentionButton = document.getElementById("attention-button"),
  tagsButton = document.getElementById("tags-button"),
  captionsContainer = document.getElementById("captions-container"),
  mainContainer = document.getElementById("main"),
  questionBlock = document.getElementById("question-block"),
  attentionBlock = document.getElementById("attention-block"),
  tagsBlock = document.getElementById("aside-tags");


//event for button "captions"
captionsListButton.onfocus = function () {
  captionsContainer.classList.add("captions-container--block");
};
captionsListButton.onblur = function () {
  captionsContainer.classList.remove("captions-container--block");
};



//event for button "question"
questionButton.onfocus = function () {
   questionBlock.classList.add("block-flex");
};
questionButton.onblur = function () {
   questionBlock.classList.remove("block-flex");
};

//event for button "attention"
attentionButton.onfocus = function () {
  attentionBlock.classList.add("block-flex");
};
attentionButton.onblur = function () {
  attentionBlock.classList.remove("block-flex");
};


tagsButton.onfocus = function () {
  tagsBlock.classList.add("block-visible");
};

tagsButton.onblur = function () {
  tagsBlock.classList.remove("block-visible");
};