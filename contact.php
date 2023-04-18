<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // ここにお問い合わせフォームのデータを送信する処理を追加

    // メール送信の例（送信するメールの設定に合わせて変更してください）
    $to = "example@example.com";
    $subject = "お問い合わせフォームからのメッセージ";
    $message = "お名前: " . $name . "\n" .
               "メールアドレス: " . $email . "\n" .
               "お問い合わせ内容: " . $message;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);

    // 送信完了後にリダイレクトなどの処理を追加
    header("Location: thank_you.html");
    exit;
}
?>
