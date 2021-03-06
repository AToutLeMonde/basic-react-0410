import React, { PureComponent } from 'react'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering article')
    const { article, isOpen } = this.props
    const text = isOpen ? 'close' : 'open'
    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>{text}</button>
        {this.body}
      </div>
    )
  }

  setTitleRef = (ref) => {
    console.log('---', 'article title', ref)
  }

  onButtonClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return <section>{article.text}</section>
  }
}

export default Article
