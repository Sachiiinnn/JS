const insert = document.querySelector('#insert');
console.log(insert);

window.addEventListener('keydown', function(event){
    insert.innerHTML = `<div class = "color">
    <table>
  <thead>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </thead>
  <tr>
    <td>${event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
    </div>`
})