<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Gerenciamento de Tarefas</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="index.php">Home</a>
					</li>

					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Atividades
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="?page=cadastrar-tarefa">criar atividade</a></li>
							<li><a class="dropdown-item" href="?page=listar-tarefa">Listar prioridades</a></li>
						</ul>
					</li>

				</ul>
			</div>
		</div>
	</nav>
	<div class="container">
		<div class="row">
			<div class="col-lg-12 mt-5">
				<?php
					//conexao com o banco
					include('conexao.php');
					
					switch (@$_REQUEST['page']) {
						//tarefas
						case 'cadastrar-tarefa':
						include('cadastrar-tarefa.php');
						break;
						case 'listar-tarefa':
						include('listar-tarefa.php');
						break;
						case 'editar-tarefa':
						include('editar-tarefa.php');
						break;
						case 'salvar-tarefa':
						include('salvar-tarefa.php');
						break;

						default:
						print "<h1>Bem vindo ao nosso gerenciador de tarefas</h1>";
			 		}
				?>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
</body>
</html>