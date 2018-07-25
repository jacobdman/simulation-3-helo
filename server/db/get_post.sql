select * from posts
INNER JOIN users ON posts.author_id = users.id
where id = $1