function generateCSS() {
    return `
    .card {
    min-width: 200px;
    max-width: 250px;
}
.my-list {
    font-size: x-small;
}

.card-hover:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 8px 0 rgba(61, 44, 44, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.24);

}

a:link {
    text-decoration: none;
    color: #b39064;
}


a:link:hover {
    color:  #8c41ee;
}

a:visited {
    color: lightcoral;
}
    `
}
module.exports = generateCSS;