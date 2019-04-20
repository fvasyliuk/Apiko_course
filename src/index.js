function createElement(tag,props,childs) {
  const htmlElement = document.createElement(tag);        
  // прокидаємо props
  if (props) {
      Object.keys(props).forEach((item)=>{
          typeof(props[item])!=='object'
              ?htmlElement[item]=props[item]
              :(Object.keys(props[item]).forEach((it)=>{htmlElement[item][it]=props[item][it]}))
      })
  }       
  // append childs
  if (typeof(childs)!=='undefined'){ 
    Array.isArray(childs)
        ?childs.forEach((child)=>{
            typeof(child)==='object'
                ?htmlElement.appendChild(child)
                :htmlElement.appendChild(document.createTextNode(child));
        })
        :typeof(childs)==='object'
            ?htmlElement.appendChild(childs)
            :htmlElement.appendChild(document.createTextNode(childs));
  }
  return htmlElement ;  
}

function render(ch,par){  
  par.appendChild(ch);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
