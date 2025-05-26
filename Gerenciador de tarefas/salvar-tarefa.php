<?php
	switch (@$_REQUEST['acao']) {
		case 'cadastrar':
			$sql = "INSERT INTO tarefa (
						tarefa,
						Descricao,
						vencimento,
						prioridade
					) VALUES (
						'".$_POST['tarefa']."',
						'".$_POST['descricao']."',
						'".$_POST['vencimento']."',
						'".$_POST['prioridade']."'
					)";
			$res = $conn->query($sql);
			if($res==true){
				print "<script>alert('Cadastrou com sucesso');</script>";
				print "<script>location.href='?page=listar-tarefa';</script>";
			}else{
				print "<script>alert('Não foi possível cadastrar');</script>";
				print "<script>location.href='?page=cadastrar-tarefa';</script>";
			}
			break;
		
		case 'editar':
			$sql = "UPDATE tarefa SET
						tarefa='".$_POST['tarefa']."',
						descricao='".$_POST['descricao']."',
						vencimento='".$_POST['vencimento']."',
						prioridade='".$_POST['prioridade']."'
					WHERE
						id_tarefa=".$_POST['id_tarefa'];
			$res = $conn->query($sql);
			if($res==true){
				print "<script>alert('Editou com sucesso');</script>";
				print "<script>location.href='?page=listar-tarefa';</script>";
			}else{
				print "<script>alert('Não foi possível editar');</script>";
				print "<script>location.href='?page=listar-tarefa';</script>";
			}
			break;

		case 'excluir':
			$sql = "DELETE FROM tarefa WHERE id_tarefa=".$_REQUEST['id_tarefa'];
			$res = $conn->query($sql);
			if($res==true){
				print "<script>alert('Excluiu com sucesso');</script>";
				print "<script>location.href='?page=listar-tarefa';</script>";
			}else{
				print "<script>alert('Não foi possível excluir');</script>";
				print "<script>location.href='?page=listar-tarefa';</script>";
			}
			break;
	}

