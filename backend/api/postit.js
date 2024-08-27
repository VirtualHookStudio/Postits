module.exports = app => {
    const get = async (req, res) => {
        await app.db('postits')
            .select('id', 'name', 'text', 'created_at')
            .then(postits => res.json(postits))
    }

    const save = async (req, res) => {
        var postitdb = await app.db('postits').insert({name: 'name', text: '',created_at: new Date()}).returning('id')
        postitdb = await app.db('postits').update({name: `Postit  ${postitdb[0].id}`}).where({id: postitdb[0].id})

        res.send('postit save')
    }

    const update = async (req, res) => {
        const postit = {...req.body.data.postitUpdated}

        await app.db('postits').update(postit).where({id: postit.id})

        res.send('postit updated')
    }

    const remove = async (req, res) => {
        const id = {...req.body}
        
        await app.db('postits').where({id: id.id}).del()

        res.send('postit delete')
    }

    return {get, save, update, remove}
}