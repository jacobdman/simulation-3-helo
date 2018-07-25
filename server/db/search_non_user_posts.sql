SELECT * FROM posts 
INNER JOIN users ON posts.author_id = users.id
WHERE title LIKE LIKE $2, ['%' + tag + '%']
HAVING author_id != $1