<?php
    $return = new stdClass;
        $return->error = '';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if(!empty($_POST) && (!empty($_POST['name']))){

                    $name = $_POST['name'];
                    $company = $_POST['company'];
                    $phone = $_POST['phone'];
                    $msj = $_POST['msj'];
                    

                    if($_POST['name'] != ""){
                        $name = $_POST['name'];
                    }

                    if($_POST['company'] != ""){
                        $company = $_POST['company'];
                    }

                    if($_POST['phone'] != ""){
                        $phone = $_POST['phone'];
                    }

                    if($_POST['msj'] != ""){
                        $msj = $_POST['msj'];
                    }

                    $mail = $_POST['mail'];

                    $userInfo = array(
                        "name"=>$name,
                        "mail"=>$mail,
                        "company"=>$company,
                        "phone"=>$phone,
                        "msj"=>$msj
                    );

                    //$support = new connector_EntitySupport();
                    //$result = $support->save($userInfo,"Register");
                    $return->response = "1";
                    echo json_encode($return);
                    
                }
            }else{
                $return->error = 'Invalid data';
                echo json_encode($return);
            }
        
?>