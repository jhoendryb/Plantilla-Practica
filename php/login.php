<?php
require_once "modelo.php";

class login extends connection
{

    public function cargaRequerimiento()
    {
        $consulta = $this->link->prepare("
            SELECT * FROM tabla
        ");
        $consulta->execute();
        return ($consulta->fetchAll(PDO::FETCH_OBJ));
    }

    public function usuarios($usuario, $clave, $nombre, $nivel, $email, $telefono)
    {
        $do = $this->link->prepare("
			INSERT INTO usuarios set
			usuario=:usuario,
			clave=:clave,
			nombre=:nombre,
			nivel=:nivel,
			email=:email,
			telefono=:telefono");
        $do->bindParam(":usuario", $usuario);
        $do->bindParam(":clave", md5($clave));
        $do->bindParam(":nombre", $nombre);
        $do->bindParam(":nivel", $nivel);
        $do->bindParam(":email", $email);
        $do->bindParam(":telefono", $telefono);
        $do->execute();
    }

    public function register($usuario, $clave, $nombre, $nivel, $email, $telefono)
    {
        $do = $this->link->prepare("
			INSERT INTO usuarios set
			usuario=:usuario,
			clave=:clave,
			nombre=:nombre,
			nivel=:nivel,
			email=:email,
			telefono=:telefono");
        $do->bindParam(":usuario", $usuario);
        $do->bindParam(":clave", md5($clave));
        $do->bindParam(":nombre", $nombre);
        $do->bindParam(":nivel", $nivel);
        $do->bindParam(":email", $email);
        $do->bindParam(":telefono", $telefono);
        $do->execute();
    }
}
