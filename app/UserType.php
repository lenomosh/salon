<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserType extends Model
{
    protected $guarded =[];
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
