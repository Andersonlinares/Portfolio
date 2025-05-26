<h1>Listar atividades</h1>
<?php
	$sql = "SELECT * FROM tarefa";
	$res = $conn->query($sql);
	$qtd = $res->num_rows;

	if($qtd > 0){
		print "<p>Encontrei <b>$qtd</b> resultado(s)</p>";
		print "<table class='table table-bordered table-striped table-hover'>";
		print "<tr>";
		print "<th>Tarefa</th>";
		print "<th>Descricao</th>";
		print "<th>Vencimento</th>";
		print "<th>Prioridade</th>";
		print "</tr>";
		while($row = $res->fetch_object()){
			print "<tr>";
			print "<td>".$row->tarefa."</td>";
			print "<td>".$row->descricao."</td>";
			print "<td>".$row->vencimento."</td>";
			print "<td>".$row->prioridade."</td>";
			print "<td>
						<button onclick=\"location.href='?page=editar-tarefa&id_tarefa=".$row->id_tarefa."';\" class='btn btn-primary'>Editar</button>

						<button onclick=\"if(confirm('Tem certeza que deseja excluir?')){location.href='?page=salvar-tarefa&acao=excluir&id_tarefa=".$row->id_tarefa."';}else{false;}\" class='btn btn-danger'>Excluir</button>
			       </td>";
			print "</tr>";
		}
		print "</table>";
	}else{
		print "<p>Não há resultados</p>";
	}
