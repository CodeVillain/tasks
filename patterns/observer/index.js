const Page = require('./components/Page');
const Header = require('./components/Header');
const Layout = require('./components/Layout');
const Footer = require('./components/Footer');

const header = new Header();
const layout = new Layout();
const footer = new Footer();

const page = new Page({title: 'Say my name'});

page.addObserver(header.render);
page.addObserver(layout.render);
page.addObserver(footer.render);

page.update();