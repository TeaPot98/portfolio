import "./App.scss"

const App = () => {
  return (
    <div className="App">
      {/* <div className="parallax">
        <div className="parallax__layer parallax__layer__0">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
        </div>
        <div className="parallax__layer parallax__layer__1">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
        </div>
        <div className="parallax__layer parallax__layer__2">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
        </div>
        <div className="parallax__layer parallax__layer__3">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
        </div>
        <div className="parallax__layer parallax__layer__4">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
        </div>
        <div className="parallax__layer parallax__layer__5">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
        </div>
        <div className="parallax__layer parallax__layer__6">
            <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
        </div>
        <div className="parallax__cover">
            <div className="container">
                    <p>What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div> */}
        <section className="parallax">
            <h1 className="parallax-text">Hello world!</h1>
            <div className="parallax-layer parallax-layer-0"></div>
            <div className="parallax-layer parallax-layer-1"></div>
            <div className="parallax-layer parallax-layer-2"></div>
        </section>
        <section className="no-parallax">
            <p>Some text</p>
        </section>
        <section className="parallax">
            <div className="parallax-layer parallax-layer-0"></div>
            <div className="parallax-layer parallax-layer-1"></div>
            <div className="parallax-layer parallax-layer-2"></div>
        </section>
    </div>
  )
}

export default App;
