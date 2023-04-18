<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['message'] = $_POST['message'];
    header('Location: complete.php');
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>確認画面</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>確認画面</h1>
        <p>お名前： <?php echo $_SESSION['name']; ?></p>
        <p>メールアドレス： <?php echo $_SESSION['email']; ?></p>
        <p>お問い合わせ内容： <?php echo $_SESSION['message']; ?></p>
        <form action="complete.php" method="post">
            <input type="hidden" name="name" value="<?php echo $_SESSION['name']; ?>">
            <input type="hidden" name="email" value="<?php echo $_SESSION['email']; ?>">
            <input type="hidden" name="message" value="<?php echo $_SESSION['message']; ?>">
            <input type="submit" value="送信">
        </form>
    </div>
</body>
</html>
