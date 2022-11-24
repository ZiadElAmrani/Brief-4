<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    @foreach($data as $row)
    <form method="post" action="{{url('updateTodo')}}/{{$row->id}}">
    @csrf
    <p>Todo edit</p>
    <input type="text" name="name" value="{{$row->name}}">
    <input type="submit" value="edit">
    </form>
    @endforeach
</body>
</html>