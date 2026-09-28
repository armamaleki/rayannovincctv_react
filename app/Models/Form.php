<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $fillable = [
        'name',
        'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function getDataValue(string $key, $default = null)
    {
        return data_get($this->data, $key, $default);
    }

    public function setDataValue(string $key, $value): void
    {
        $data = $this->data ?? [];

        $data[$key] = $value;

        $this->data = $data;
    }
}