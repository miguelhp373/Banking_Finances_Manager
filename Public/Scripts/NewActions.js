function addMoney(){
    document.querySelector('.modal-add-action').innerHTML=`<div id="myModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        
            <div class="modal-header" style='background-color: rgb(39, 174, 96);' >
            <h1 style='font-size:20px;'>Nova Receita</h1>               
            </div>
            <div class="modal-body">
                <label for='new-input'>Valor da Receita:</label>
                <input class ='new-input' type='number' placeholder='R$'/>
                <br>
                <input class = 'new-input' type='text' placeholder='Descrição'/>
                <br>
                <select id='add-money-categorias' class='select-categorias'>
                <option>Categoria</option>
                <option value='0'>Salário</option>
                <option value='1'>Troco</option>
                <option value='2'>Econômias</option>
                </select>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-success">Confirmar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
  </div>`

    $("#myModal").modal({
        show: true
    });
}

function NewDespesa(){
    document.querySelector('.modal-add-action').innerHTML=`<div id="myModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        
            <div class="modal-header" style='background-color:#d63031;'>
            <h1 style='font-size:20px;'>Nova Despesa</h1>
                                
            </div>
            <div class="modal-body">
                <label for='new-input'>Valor da Despesa:</label>
                <input class ='new-input' type='number' placeholder='R$'/>
                <br>
                <input class = 'new-input' type='text' placeholder='Descrição'/>
                <br>
                <select id='add-money-categorias' class='select-categorias'>
                <option>Categoria</option>
                <option value='0'>Salário</option>
                <option value='1'>Troco</option>
                <option value='2'>Econômias</option>
                </select>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-success">Confirmar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
  </div>`

    $("#myModal").modal({
        show: true
    });
}

function MyPlanejament(){
    document.querySelector('.modal-add-action').innerHTML=`<div id="myModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        
            <div class="modal-header" style='background-color:#0984e3;'>
            <h1 style='font-size:20px;'>Planejamento</h1>
                                
            </div>
            <div class="modal-body">
                <label for='new-input'>Valor a Ser Planejado:</label>
                <input class ='new-input' type='number' placeholder='R$'/>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-success">Confirmar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
  </div>`

    $("#myModal").modal({
        show: true
    });
}






