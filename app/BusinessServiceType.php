<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessServiceType extends Model
{
    protected $guarded = [];
    public function service():HasMany{
        return $this->hasMany(BusinessService::class,'type_id','id');
    }
}
